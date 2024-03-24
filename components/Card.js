import React from "react";
import styles from "./Card.module.css"; // Adjust the path as necessary

const Card = ({ data }) => {
  return (
    <>
      <div className={styles.card}>
        {data ? (
          <div className={styles.cardContent}>
            <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
          </div>
        ) : (
          <div className={styles.temp}>
<h4 style={{ color: 'tomato', fontStyle: 'italic' }}>A Powerful Serverless Ecosystem</h4>

            <p>
              Welcome to an ecosystem where simplicity and power converge
              through the innovative use of serverless architecture. This
              environment leverages the agility of Node.js alongside the
              scalability of serverless technologies, offering a seamless,
              efficient platform for building and deploying full-stack
              applications.
            </p>
            <br />

            <ul>
              <li>
                <strong style={{ color: 'skyblue', fontStyle: 'italic' }}>Serverless Backend with AWS Lambda:</strong> At its
                heart, AWS Lambda functions spring into action in response to
                HTTP requests, eliminating the need for traditional server
                provisioning and maintenance. This setup adapts fluidly to
                varying loads, guaranteeing that resources are efficiently
                utilized, ensuring scalability and reducing operational costs.
              </li>
              <br />
              <li>
                <strong style={{ color: 'skyblue', fontStyle: 'italic' }}>Efficient Request Routing via API Gateway:</strong>
                Acting as the pivotal bridge, AWS API Gateway diligently directs
                incoming traffic to the corresponding Lambda functions. It
                streamlines endpoint management while bolstering security
                measures and providing detailed analytics on API usage.
              </li>
              <br />
              <li>
                <strong style={{ color: 'skyblue', fontStyle: 'italic' }}>Automated Workflows with GitHub Actions:</strong> Our
                development process is supercharged with GitHub Actions,
                facilitating automatic builds and deployments directly from our
                git repositories. This CI/CD pipeline minimizes manual
                intervention, keeping our application up-to-date and reducing
                the lead time for new features and fixes.
              </li>
              <br />
              <li>
                <strong style={{ color: 'skyblue', fontStyle: 'italic' }}>Dynamic Next.js Frontend Hosted on Vercel:</strong> The
                application&apos;s frontend is built using Next.js, renowned for its
                performance, with server-side rendering and static site
                generation capabilities. Deployed on Vercel, it enjoys a swift,
                global reach thanks to Vercel&apos;s edge network, ensuring that
                content is delivered promptly to users anywhere in the world.
              </li>
              <br />
              <li>
                <strong style={{ color: 'skyblue', fontStyle: 'italic' }}>Unified and Dynamic Integration:</strong> Bridging the
                gap between frontend and backend, the application ensures a
                seamless flow of data and functionalities. This integration is
                key to delivering a responsive and intuitive user experience,
                allowing the frontend to dynamically display content and execute
                functionalities provided by the serverless backend.
              </li>
              <br />
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
