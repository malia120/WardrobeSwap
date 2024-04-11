import unittest
from app import app, db, Listing, User

class TestApp(unittest.TestCase):

    def test_home_page(self):
        print("Testing Home Page...")
        response = self.app.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data.decode('utf-8'), "enter /api after the link to see all the items in the database")
        print("Home Page test passed successfully.")

    def setUp(self):
        app.config['TESTING'] = True
        self.app = app.test_client()
        with app.app_context():
            db.create_all()

    def tearDown(self):
        with app.app_context():
            db.session.remove()
            db.drop_all()

    def test_get_listing(self):
        print("Testing Get Listing...")
        new_listing = Listing(title='Test Title', description='Test Description', category='Test Category', price='Test Price', image='test_image.jpg')
        with app.app_context():
            db.session.add(new_listing)
            db.session.commit()
            response = self.app.get('/api/listing/1')
            self.assertEqual(response.status_code, 200)
            data = response.json
            self.assertEqual(data['id'], 1)
            self.assertEqual(data['title'], 'Test Title')
            self.assertEqual(data['description'], 'Test Description')
            self.assertEqual(data['category'], 'Test Category')
            self.assertEqual(data['price'], 'Test Price')
            print("Get Listing test passed successfully.")

    def test_invalid_listing_id(self):
        print("Testing Invalid Listing ID...")
        response = self.app.get('/api/listing/999')
        self.assertEqual(response.status_code, 404)
        data = response.json
        self.assertEqual(data['error'], 'Listing not found')
        print("Invalid Listing ID test passed successfully.")

    def test_add_listing(self):
        print("Testing Add Listing...")
        data = {
            'Title': 'New Test Title',
            'Description': 'New Test Description',
            'Category': 'New Test Category',
            'Price': 'New Test Price',
        }
    
        response = self.app.post('/api/listing', data=data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json['message'], 'Listing added successfully')
        print("Add Listing test passed successfully.")

    def test_user_signup(self):
        print("Testing User Signup...")
        data = {
            'username': 'test_user',
            'email': 'test@example.com',
            'password': 'testpassword'
        }
        response = self.app.post('/api/signup', json=data)
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json['message'], 'Signup successful')
        print("User Signup test passed successfully.")

    def test_user_login(self):
        print("Testing User Login...")
        new_user = User(username='test_user', email='test@example.com', password='testpassword')
        with app.app_context():
            db.session.add(new_user)
            db.session.commit()

        data = {
            'username': 'test_user',
            'password': 'testpassword'
        }
        response = self.app.post('/api/login', json=data)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json['message'], 'Login successful')
        print("User Login test passed successfully.")

    def test_invalid_login(self):
        print("Testing Invalid User Login...")
        data = {
            'username': 'invalid_user',
            'password': 'invalidpassword'
        }
        response = self.app.post('/api/login', json=data)
        self.assertEqual(response.status_code, 401)
        self.assertEqual(response.json['error'], 'Invalid username or password')
        print("Invalid User Login test passed successfully.")

    def test_get_all_users(self):
        print("Testing Get All Users...")
        new_user = User(username='test_user', email='test@example.com', password='testpassword')
        with app.app_context():
            db.session.add(new_user)
            db.session.commit()

        response = self.app.get('/api/signup')
        self.assertEqual(response.status_code, 200)
        data = response.json['users']
        self.assertTrue(len(data) > 0)
        print("Get All Users test passed successfully.")

    def test_get_all_listings(self):
        print("Testing Get All Listings...")
        new_listing = Listing(title='Test Listing', description='Test Description', category='Test Category', price='Test Price')
        with app.app_context():
            db.session.add(new_listing)
            db.session.commit()

        response = self.app.get('/api/listing')
        self.assertEqual(response.status_code, 200)
        data = response.json['listings']
        self.assertTrue(len(data) > 0)
        print("Get All Listings test passed successfully.")

if __name__ == '__main__':
    unittest.main()