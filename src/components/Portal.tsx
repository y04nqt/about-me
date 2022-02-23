import { Button } from "@react95/core";
import { Link } from "react-router-dom";

const Portal = ({
  route = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
}) => (
  <>
    <p
      className="text-center my-4 text-3xl text-white"
    >
      I Can Only Show You The Door. You're The One That Has To Walk Through It.
    </p>
    <section className="sm:flex sm:justify-center text-center">
      <Button
        className="rounded-full sm:mr-2 mb-4 md:mb-0"
        style={{background: 'blue', fontSize: '1.5rem'}}
        onClick={() => window.open(route, '_self')}
      >
        Stay In Wonderland
      </Button>
      <Link
        className="text-center"
        to='/through-the-door'
      >
        <Button
          className="rounded-full"
          style={{background: 'red', fontSize: '1.5rem'}}
        >
          Down The Rabbit Hole
        </Button>
      </Link>
    </section>
    <hr
      className="my-8 w-4/6 mx-auto"
    />
  </>
)

export default Portal;