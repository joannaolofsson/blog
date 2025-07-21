
import { PiFile, PiFilePlus } from "react-icons/pi";
import IconButton from "../Button/IconButton";
import Button from "../Button/Button";

export default function TagBtn() {
  return (
    <>
      <IconButton
      icon={<PiFilePlus />}
      />
      <div className="dropdown">
        <input type="search" placeholder="Search tags..." autoFocus />
        <ul>
          {/* Render tag options here */}
          <li>
            <Button variant="primary" type="button">Tag Label</Button>
          </li>
          {/* ...more tags */}
        </ul>
      </div>
    </>
  );
}
