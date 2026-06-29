### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

A JWT (JSON Web Token) is a compact, URL-safe token used to securely transmit information between parties. It is commonly used for authentication and contains a header, payload, and signature. 

- What is the signature portion of the JWT?  What does it do?

The signature is created by signing the header and payload with a secret key (or private key). It verifies that the token has not been modified and confirms it was issued by a trusted source.

- If a JWT is intercepted, can the attacker see what's inside the payload?

Yes. The payload is Base64Url-encoded, not encrypted, so anyone with the token can decode and read its contents. Sensitive information should never be stored in the payload.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

After a user logs in with valid credentials, the server creates a signed JWT and sends it to the client. The client stores the token (such as in local storage or a cookie) and includes it with future requests. The server verifies the token before allowing access to protected resources.

- Compare and contrast unit, integration and end-to-end tests.

  - Unit tests verify individual functions or methods in isolation.
  - Integration tests verify that multiple parts of the application work together correctly, such as routes interacting with a database.
  - End-to-end tests simulate real user behavior by testing the entire application from the user interface to the backend.

- What is a mock? What are some things you would mock?

A mock is a fake implementation of a dependency used during testing. Common things to mock include API requests, databases, authentication services, email services, payment providers, and file systems.

- What is continuous integration?

Continuous integration (CI) is the practice of automatically building and testing code whenever changes are pushed to a shared repository. It helps detect bugs early and ensures new code integrates correctly.

- What is an environment variable and what are they used for?

An environment variable is a configuration value stored outside the application code. They are commonly used for secrets, API keys, database URLs, ports, and environment-specific settings.

- What is TDD? What are some benefits and drawbacks?

Test-Driven Development (TDD) is a development process where tests are written before the implementation code.

Benefits:
  - Encourages well-tested, maintainable code.
  - Helps catch bugs early.
  - Improves code design.

Drawbacks:
  - Can take longer initially.
  - Writing good tests requires experience.
  - Not every feature is naturally suited to strict TDD.

- What is the value of using JSONSchema for validation?

JSONSchema provides a standardized way to validate incoming JSON data. It ensures requests have the correct structure, required fields, and data types, making applications more reliable and secure.

- What are some ways to decide which code to test?

Focus on testing business logic, complex functions, edge cases, validation, error handling, and critical application features. Simple getters or code with little logic generally require less testing.

- What does `RETURNING` do in SQL? When would you use it?

The `RETURNING` clause returns rows affected by an `INSERT`, `UPDATE`, or `DELETE` statement. It is useful when you need the newly created or updated data immediately without making another query.

- What are some differences between Web Sockets and HTTP?

HTTP follows a request-response model where the client initiates communication for each request. WebSockets create a persistent, two-way connection that allows both the client and server to send messages at any time, making them useful for real-time applications like chat or live notifications.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

I slightly preferred Express because I found JavaScript more convenient to work with across both the frontend and backend, and Express felt lightweight and flexible. However, I also liked Flask because its structure is clean and easy to understand, making it enjoyable for building backend applications.