import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      Sorry, an error occured! Please use this <Link to="/">link</Link> to go
      back to our home page.
    </div>
  );
}
