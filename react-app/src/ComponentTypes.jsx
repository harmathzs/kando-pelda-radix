import ClassBikeTile from "./ClassBikeTile";
import ClassComponent from "./ClassComponent";
import FunctionBikeTile from "./FunctionBikeTile";
import FunctionComponent from "./FunctionComponent";

const ComponentTypes = () => <div>
    <ClassBikeTile type="trekking" />
    <FunctionBikeTile type="mtb" />

    <ClassComponent fruit="apple" animal="monkey" />
    <FunctionComponent fruit="apple" animal="monkey" />
</div>
export default ComponentTypes;