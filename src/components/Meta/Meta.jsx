import PropTypes from 'prop-types';
const Meta = ({ title, description, image, url }) => {
    return (
      <>
        <title>{title || 'Your 3D and Animation Classes'}</title>
        <meta name="description" content={description || 'Explore the world of 3D and animation with our engaging classes. Learn industry-standard tools and techniques.'} />
  
        {/* Open Graph meta tags */}
        <meta property="og:title" content={title || 'Your 3D and Animation Classes'} />
        <meta property="og:description" content={description || 'Explore the world of 3D and animation with our engaging classes. Learn industry-standard tools and techniques.'} />
        <meta property="og:image" content={image || '/default-image.jpg'} />
        <meta property="og:url" content={url || 'https://yourdomain.com'} />
  
        {/* Twitter Card meta tags */}
        <meta name="twitter:title" content={title || 'Your 3D and Animation Classes'} />
        <meta name="twitter:description" content={description || 'Explore the world of 3D and animation with our engaging classes. Learn industry-standard tools and techniques.'} />
        <meta name="twitter:image" content={image || '/default-image.jpg'} />
      </>
    );
  };

  Meta.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    url: PropTypes.string,
  };
  
  export default Meta;