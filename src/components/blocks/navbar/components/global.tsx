// GLOBAL CUSTOM COMPONENTS
import DropdownToggleLink from "components/reuseable/links/DropdownToggleLink";
// LOCAL CUSTOM COMPONENTS
import renderLinks from "./render-links";
// CUSTOM DATA
import { globalLink } from "data/navigation";

export default function GlobalNav() {
  return (
    <li className="nav-item dropdown">
      <DropdownToggleLink title="Global" className="nav-link dropdown-toggle" />
      <ul className="dropdown-menu dropdown-lg">
        <ul className="list-unstyled cc-3">{renderLinks(globalLink)}</ul>
      </ul>
    </li>
  );
}
