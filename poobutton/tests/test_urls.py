"""Tests for poobutton URL routing."""
from django.test import TestCase
from django.urls import reverse, resolve


class URLTestCase(TestCase):
    """Test URL patterns resolve correctly."""

    def test_index_url_resolves(self):
        """Test that the index URL resolves correctly."""
        url = reverse('poobutton:index')
        self.assertEqual(url, '/poobutton/')

    def test_press_url_resolves(self):
        """Test that the press URL resolves correctly."""
        url = reverse('poobutton:press')
        self.assertEqual(url, '/poobutton/press/')

    def test_reset_url_resolves(self):
        """Test that the reset URL resolves correctly."""
        url = reverse('poobutton:reset')
        self.assertEqual(url, '/poobutton/reset/')
