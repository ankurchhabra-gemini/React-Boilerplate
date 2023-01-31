import { useEffect, useState, useRef } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { IconContext } from "react-icons";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/material";

export function MenuListComposition() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <div className="flex">
          <IconContext.Provider value={{ color: "#17A2B8" }}>
            <IoMdContact className="h-7 w-7" />
          </IconContext.Provider>

          <button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <IconContext.Provider value={{ color: "#17A2B8", size: "50px" }}>
              <MdOutlineArrowDropDown className="h-4 w-4" />
            </IconContext.Provider>
          </button>
        </div>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

interface Props {
  message: string;
}
export function Card({ message }: Props) {
  return (
    <button className="text-xs card card-small items-center justify-center flex w-48 h-12 border border-slate-900/10 mx-3 hover:scale-110 hover:shadow-cardShadow transition ease-in-out delay-200">
      <svg
        className="material-icons"
        xmlns=""
        width="24"
        height="24"
        fill="#5f5f5f"
        viewBox="0 0 24 24"
      >
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span>{message}</span>
    </button>
  );
}

export function CustomSearch() {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        borderRadius: "35px",
        padding: "2px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

interface PagesProps {
  pagesData: number[];
  itemsPerPage: number;
  setItemsPerPage: (val: number) => void;
  // setReset: (val: boolean) => void;
  // reset: boolean;
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function CustomSelect({
  pagesData,
  setItemsPerPage,
  itemsPerPage,
}: // setReset,
// reset,
PagesProps) {
  return (
    <Menu as="div" className="relative inline-block text-left ml-6">
      <div>
        <Menu.Button className="inline-flex w-full justify-center  rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          {itemsPerPage}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {pagesData.map((numberOfPages) => {
              return (
                <Menu.Item key={numberOfPages}>
                  {({ active }: any) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100  text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm "
                      )}
                      onClick={() => {
                        setItemsPerPage(numberOfPages);
                        // setReset(true);
                      }}
                    >
                      {numberOfPages}
                    </p>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
interface CustomCardProps {
  heading: string;
  title: string;
  completed: boolean;
  id: string;
}
export function CustomCard({ title, completed, heading, id }: CustomCardProps) {
  return (
    <div className="w-96 mx-2  rounded overflow-hidden shadow-lg text-center m-auto">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {heading}----{id}
        </div>
      </div>
      <div className="px-1 pt-4 pb-2 w-[100%]">
        <div>
          <span className="">Title</span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {title.substring(0, 6)}
          </span>
        </div>
        <div>
          <span className="">completed</span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {completed === true ? "true" : "false"}
          </span>
        </div>
      </div>
    </div>
  );
}
interface PaginationProps {
  count: number | undefined;
  setPageNumber: (val: number) => void;
}
export function CustomPagination({ count, setPageNumber }: PaginationProps) {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };
  return (
    <>
      <Stack spacing={2}>
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
