import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/abdo.png"
          al="Abdulrhman Kotb"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Abdulrhman</h1>
      <p>
        I blog about web development - especially MERN stack techs (React, Node,
        MongoDB)
      </p>
    </section>
  );
};

export default Hero;
