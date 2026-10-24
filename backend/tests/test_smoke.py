import unittest

from fastapi.testclient import TestClient

from main import app


class ApplicationSmokeTest(unittest.TestCase):
    def test_application_responds(self) -> None:
        with TestClient(app) as client:
            response = client.get("/")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "Hello World"})


if __name__ == "__main__":
    unittest.main()
