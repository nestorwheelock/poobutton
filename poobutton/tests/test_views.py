"""Tests for poobutton views."""
from django.test import TestCase, Client
from django.urls import reverse


class ButtonViewTestCase(TestCase):
    """Test cases for the button page view."""

    def setUp(self):
        self.client = Client()

    def test_button_view_loads(self):
        """Test that the button page loads successfully."""
        response = self.client.get(reverse('poobutton:index'))
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'poobutton/index.html')

    def test_button_view_initializes_session(self):
        """Test that press_count is initialized in session."""
        response = self.client.get(reverse('poobutton:index'))
        self.assertIn('press_count', self.client.session)
        self.assertEqual(self.client.session['press_count'], 0)

    def test_button_view_preserves_session(self):
        """Test that press_count persists across requests."""
        # First request initializes
        self.client.get(reverse('poobutton:index'))
        session = self.client.session
        session['press_count'] = 3
        session.save()

        # Second request preserves value
        response = self.client.get(reverse('poobutton:index'))
        self.assertEqual(response.context['press_count'], 3)


class IncrementPressTestCase(TestCase):
    """Test cases for the press increment endpoint."""

    def setUp(self):
        self.client = Client()

    def test_increment_press_increments_count(self):
        """Test that the press endpoint increments the count."""
        # Initialize session
        self.client.get(reverse('poobutton:index'))

        # First press
        response = self.client.post(reverse('poobutton:press'))
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(data['press_count'], 1)
        self.assertEqual(data['max_presses'], 5)

        # Second press
        response = self.client.post(reverse('poobutton:press'))
        data = response.json()
        self.assertEqual(data['press_count'], 2)

    def test_increment_press_requires_post(self):
        """Test that the press endpoint only accepts POST."""
        response = self.client.get(reverse('poobutton:press'))
        self.assertEqual(response.status_code, 400)
        data = response.json()
        self.assertIn('error', data)

    def test_multiple_presses_to_max(self):
        """Test pressing button to maximum count."""
        self.client.get(reverse('poobutton:index'))

        # Press 5 times
        for i in range(1, 6):
            response = self.client.post(reverse('poobutton:press'))
            data = response.json()
            self.assertEqual(data['press_count'], i)

    def test_press_beyond_max(self):
        """Test that pressing beyond max still increments."""
        self.client.get(reverse('poobutton:index'))

        # Press 7 times
        for _ in range(7):
            response = self.client.post(reverse('poobutton:press'))

        data = response.json()
        self.assertEqual(data['press_count'], 7)


class ResetViewTestCase(TestCase):
    """Test cases for the reset endpoint."""

    def setUp(self):
        self.client = Client()

    def test_reset_view_resets_count(self):
        """Test that the reset endpoint resets press count."""
        # Initialize and increment
        self.client.get(reverse('poobutton:index'))
        self.client.post(reverse('poobutton:press'))
        self.client.post(reverse('poobutton:press'))

        # Reset
        response = self.client.get(reverse('poobutton:reset'))
        self.assertEqual(response.status_code, 200)
        self.assertEqual(self.client.session['press_count'], 0)
