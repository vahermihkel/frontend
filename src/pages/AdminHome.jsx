import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function AdminHome() {
  return ( 
    <div>
      <Link to="/lisa-toode">
        <Button variant="success">Lisa toode</Button>
      </Link>
      <Link to="/halda-tooteid">
        <Button>Halda tooteid</Button>
      </Link>
    </div>
   );
}

export default AdminHome;