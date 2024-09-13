# NITH Mentorship Platform

## Overview

The **NITH Mentorship Platform** is a comprehensive system designed to foster mentorship and career growth by connecting students, mentors, alumni, and admins. The platform includes role-based authorization, ensuring secure access for different user roles such as users, admins, and mentors. Key features include 1:1 mentorship sessions, resume reviews, and a space for alumni to share job opportunities.

## Features

- **Role-based authorization**: Secure access for users, admins, and mentors with different permission levels.
- **1:1 mentorship sessions**: Enables students to book sessions with mentors for personalized guidance.
- **Resume reviews**: Provides a space for mentors to review and offer feedback on resumes.
- **Job postings**: Allows alumni to post job openings, helping students with career opportunities.
- **Responsive Design**: Built with Tailwind CSS for a modern and responsive user interface.

## Tech Stack

- **Frontend**: ReactJS, Redux, Tailwind CSS
- **Backend**: ExpressJS
- **Database**: MongoDB

## Installation and Setup

### Prerequisites

- **Node.js** (v12+)
- **npm** or **yarn**
- MongoDB instance

### Steps to Setup:

1. Clone the repository:
   ```bash
   git clone https://github.com/tpstark137/nith-mentorship-platform.git
   ```
2. Navigate to the project directory:
   ```bash
   cd nith-mentorship-platform
   ```
3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```
   or if using yarn:
   ```bash
   yarn install
   ```
4. Install backend dependencies:
   ```bash
   cd ../server
   npm install
   ```
5. Set up environment variables in a `.env` file (backend):

   ```env
   MONGO_URI=your-mongodb-uri
   JWT_SECRET=your-jwt-secret
   PORT=5000
   ```

6. Run the backend server:

   ```bash
   npm start
   ```

7. Run the frontend development server:

   ```bash
   cd ../client
   npm start
   ```

8. Open your browser and navigate to `http://localhost:3000` to use the application.

## Usage

- **User**: Students can sign up, schedule 1:1 sessions, and request resume reviews.
- **Mentor**: Mentors can review resumes and conduct 1:1 sessions.
- **Admin**: Admins manage users, mentors, and job postings while controlling overall platform access.

## Future Enhancements

- Adding a notification system for upcoming mentor sessions.
- Expanding mentorship topics and skill-based categorization.
- Integration with LinkedIn for easy profile access.
- Improved analytics for mentor-student interaction tracking.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to share your suggestions.

## Contact

For any queries or issues, feel free to contact:

- **GitHub**: [tpstark137](https://github.com/tpstark137)
