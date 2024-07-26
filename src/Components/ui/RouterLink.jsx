import { Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

const RouterLink = ({ name, path }) => {
    return (
        <Typography
            key={name}
            as="li"
            variant="small"
            color="inherit"
            className="capitalize"
        >
            <Link to={path} className="flex items-center gap-1 p-1 font-bold">
                {name}
            </Link>
        </Typography>
    )
}

export default RouterLink;