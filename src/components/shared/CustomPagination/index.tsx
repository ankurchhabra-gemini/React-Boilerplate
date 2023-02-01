import { Pagination, Stack } from "@mui/material";

interface Props {
  count: number | undefined;
  setPageNumber: (val: number) => void;
  pageNumber: number;
}
const CustomPagination = ({ count, setPageNumber, pageNumber }: Props) => {
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
          page={pageNumber}
        />
      </Stack>
    </>
  );
};
export default CustomPagination;
