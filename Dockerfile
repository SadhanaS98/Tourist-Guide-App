# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy your static files to the Nginx HTML directory
COPY ./ /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
