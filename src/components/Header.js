import React,{useState,useEffect} from 'react';
import moment from 'moment';
import './Header.css'

const Header = () => {

  const [currentTime, setCurrentTime] = useState(moment().format('HH:mm:ss'));
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="header">
          <div>
            <h1>{currentTime}</h1>
            <p>{moment().format('dddd')}, {moment().format('DD MMM YYYY')}</p>
          </div>
    </section>
  )
}

export default Header