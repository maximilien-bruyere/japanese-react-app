import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';

const FooterContent = () => {
    
    const handleMouseOver = (e) => {
        e.target.style.filter = 'invert(0.40)';
    };

    const handleMouseOut = (e) => {
        e.target.style.filter = 'none';
    };
  
    const handleBlur = (e) => {
        e.target.style.filter = 'none';
    };

    const handleMouseUp = (e) => {
        if (e.button === 0) {
            e.target.style.filter = 'invert(0.40)';
        }
    };

    const handleMouseDown = (e) => {
        if (e.button === 0) { 
            e.target.style.filter = 'invert(0.70)';
        }
    };

  return (
    <footer
      style={{
        backgroundColor: '#2a3034',
        color: '#fff',
        padding: '10px',
        margin: '30px 0 0 0',
        textAlign: 'center'
      }}
    >
      <div style={{ marginBottom: '10px' }}>
        <Button
          variant="link"
          onClick={() => window.open('https://github.com/maximilien-bruyere', '_blank')}
          style={{ color: '#fff', margin: '0 10px', transition: 'filter 0.3s', padding: 0 }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onBlur={handleBlur}
          aria-label="GitHub"
        >
          <FaGithub size={30} />
        </Button>
        <Button
          variant="link"
          onClick={() => window.open('https://www.linkedin.com/in/maximilien-bruyere/', '_blank')}
          style={{ color: '#fff', margin: '0 10px', transition: 'filter 0.3s', padding: 0 }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onBlur={handleBlur}
          aria-label="LinkedIn"
        >
          <FaLinkedin size={30} />
        </Button>
      </div>
      <p>&copy; 2025 Bruyère Maximilien. Tous droits réservés. Sous licence <a href="https://www.gnu.org/licenses/gpl-3.0.html" style={{ color: '#fff' }}>GNU GPL v3</a>.</p>
    </footer>
  );
}

export default FooterContent;