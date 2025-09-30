"""Tests for poobutton Django app configuration."""
from django.test import TestCase
from django.apps import apps


class AppConfigTestCase(TestCase):
    """Test app configuration loads correctly."""

    def test_app_config_exists(self):
        """Test that poobutton app config can be loaded."""
        app_config = apps.get_app_config('poobutton')
        self.assertEqual(app_config.name, 'poobutton')
        self.assertEqual(app_config.verbose_name, 'Poo Button')
