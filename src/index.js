import { registerBlockType } from "@wordpress/blocks";

import metadata from "./block.json";
import Edit from "./Components/Backend/Edit";
import "./editor.scss";

registerBlockType(metadata, {
  icon: {
    src: "list-view",
    foreground: "#4527a4",
  },
  edit: Edit,
});
