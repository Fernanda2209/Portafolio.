import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="www.linkedin.com/in/maria-fernanda-daza-torres-5b28121b1"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Fernanda2209"
        target="_blank"
        rel="noreferrer"
      >
        <img  src={twitter} />
      </a>
      
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://instagram.com/mafe_2214?igshid=YzgyMTM2MGM="
        target="_blank"
        rel="noreferrer"
      >
        <img  src={instagram} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
