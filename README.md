

# Job Description
We are seeking a skilled Full Stack Web Developer to join our team and contribute to the development of our e-commerce platform. The successful candidate will be responsible for implementing new features and resolving bugs in both the backend/admin and frontend of our website. The primary technologies used in our tech stack include MedusaJS for the backend/admin functionality and Nuxt3 for the storefront.


# Requirements
- Strong proficiency in JavaScript/TypeScript and web development technologies.
- Experience with MedusaJS for backend and admin functionality.
- Proficiency in Nuxt3 for developing storefronts.
- Familiarity with plugin development and integration.
- Knowledge of media handling and manipulation for images, videos, and 360-degree views.
- Solid understanding of database design and management.
- Experience with frontend development, including responsive design and user interface implementation.
- Ability to work collaboratively in a team environment and meet project deadlines.
- Strong problem-solving and debugging skills.
- Excellent communication and documentation skills.


# Tech Stack
- MedusaJS (Backend/Admin): React and Typescript
- Nuxt3 (Store Front): Vue and Typescript

# Responsibilities
- Identify and resolve bugs in the current implementation, particularly the built-in import product functionality in the backend/admin section.
- Develop and integrate a plugin to support video uploading to the media section of product listings.
- Implement a plugin to enable the uploading of 360-degree images or frames to enhance the product media section.
- Enhance the system to allow individual product variants to have independent media assigned to them, establishing a many-to-many relationship.
- Develop a plugin to enable media image zooming and positioning for an improved storefront experience.
- Implement custom-built product components, including settings and stones, with the ability to match multiple stones with respective settings based on specified ranges.
- Design and develop the frontend for product views, incorporating image, video, and 360-degree view display options. The view should dynamically switch images based on the selected variant and provide an input for ring size or chain length.
- Create a product list page with a grid format and filtering options based on product details.
- Build a user-friendly interface for custom-built product selection, including separate pages for choosing settings and compatible stones. The final page should display the chosen options, final price, and additional details.
- Update the navigation menu to ensure correct links and images are displayed.
- Implement a search functionality for products to improve user experience.
- Develop a password reset page and functionality to enhance account security.
- Create an account details management page, allowing users to update their information.
- Build an order history page and functionality to enable users to track their previous purchases.
- Implement a content management system (CMS) to facilitate easy editing of static page content.

# Deliverables

## Backend/Admin

**Current Bugs**<br>
Working built-in import product functionality. This is currently not working


**Product Video Support (Plugin)**<br>
Add support for video uploading to the media section in the products



**360 Image Support (Plugin)**<br>
Add support for uploading a group of images/frames to the product media section



**Individual Variant Media (Plugin)**<br>
Allow product media to be assigned to different variants independenly (many-to-many relationship)



**Media Image Zoom and Positioning (Plugin)**<br>
Allow specifiying zoom level and position when displaying the image in the storefront 



**Custom-Built Product (Plugin)**<br>
Custom-built product components will be created separatedly, **settings** and **stones**. Each stone will be matched to multiple settings based on ranges specified in the setting details.

<details>
<summary>Example</summary>

 - **Settings**
	 - Setting 1
		 - Metal: 14K White Gold
		 - Style: Classic
		 - Stone Weight: 1.00 - 2.00 ct
		 - Stone Cut: Very Good - Good
		 - Stone Color: D-F
	- Setting 2
		 - Metal: 18K Yellow Gold
		 - Style: Vintage
		 - Stone Weight: 1.50 - 2.50 ct
		 - Stone Cut: Very Good - Poor
		 - Stone Color: E-J
	- Setting 3
		 - Metal: 18K Yellow Gold
		 - Style: Vintage
		 - Stone Weight: 3.10 - 3.75 ct
		 - Stone Cut: Good - Poor
		 - Stone Color: H-K
- **Stones**
	- Stone 1
		- Weight: 1.30 ct
		- Color: E
		- Cut: Good
	- Stone 2
		- Weight: 1.75 ct
		- Color: F
		- Cut: Very Good
	- Stone 3
		- Weight: 2.00 ct
		- Color: H
		- Cut: Poor
	- Stone 4
		- Weight: 3.25 ct
		- Color: J
		- Cut: Very Good
	- Stone 5
		- Weight: 3.50 ct
		- Color: H
		- Cut: Good
- **Possible Combinations**
	- Setting 1 - Stone 1
	- Setting 1 - Stone 2
	- Setting 2 - Stone 2
	- Setting 2 - Stone 3
	- Setting 3 - Stone 4
	- Setting 3 - Stone 5

</details>

## Frontend

**Product View**<br>
 - Display of product media (images, videos, and 360 view) Dropdown
 - Automatically switch images depending on the selected variant
 - Input for ring size or chain length

**Product List**<br>
- Page for browsing all the products in a grid format
- Filters based on product details

**Custom-built Product**<br>
- Page for choosing the setting
- Page for choosing the stone compatible with the selected setting
- Page with final price and details
- Each page should have its own filter.

**General**<br>
- Updated navigation menu with correct links and images
- Seach functionality for products
- Password reset page & functionality
- Account details management page and functionality
- Order history page & functionality
- CMS to easily edit the content of static pages
