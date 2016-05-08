from django.test import TestCase, Client


class ClientTests(TestCase):

    def setUp(self):
        self.client = Client()

    def test_front_page(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
