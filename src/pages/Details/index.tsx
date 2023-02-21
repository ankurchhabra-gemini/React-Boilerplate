/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import CustomCard from '../../components/shared/CustomCard';
import CustomPagination from '../../components/shared/CustomPagination';
import CustomSearch from '../../components/shared/CustomSearch';
import CustomSelect from '../../components/shared/CustomSelect';
import 'react-select-search/style.css';
import { useQuery } from 'react-query';
import getUserData from '../../services/UserData';
import { USER } from '../../protocols/UserData';
import { pagesData } from '../../helpers/SideBarData';

const Details = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [userData, setUserData] = useState<USER.USER_RESPONSE['data']>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  // const [reset,setReset]=useState<boolean>(false);// this state is when we set  items per page then  it resets to first page
  const [filteredData, setFilteredData] =
    useState<USER.USER_RESPONSE['data']>();
  useEffect(() => {
    // if(reset===true){
    //   setPageNumber(1);
    //   setReset(false);
    // }
    if (userData && itemsPerPage * pageNumber > userData.length) {
      setPageNumber(Math.ceil(userData.length / itemsPerPage));
    }
    setFilteredData(
      userData?.filter((curr, index, data) => {
        console.log(
          itemsPerPage * pageNumber - itemsPerPage - 1,
          itemsPerPage * pageNumber
        );
        if (
          index > itemsPerPage * pageNumber - itemsPerPage - 1 &&
          index < itemsPerPage * pageNumber
        ) {
          return data[index];
        }
      })
    );
  }, [itemsPerPage, userData, pageNumber]);

  useQuery(
    ['userData'],
    async () => {
      const data = await getUserData();
      setUserData(data);
    },
    {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    }
  );
  return (
    <div className="overflow-x-hidden w-4/5 h-[90vh] overflow-y-auto bg-white text-lightWhite p-4 justify-around  ml-4">
      <CustomSearch />
      <div className="flex mt-4">
        <p className="text-xl font-semibold">Items per page</p>
        <CustomSelect
          pagesData={pagesData}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={setItemsPerPage}
          // setReset={setReset}
          // reset={reset}
        />
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredData?.map((data) => {
          return (
            <CustomCard
              key={data.id}
              id={data.id}
              heading="UserInfo"
              title={data.title}
              completed={data.completed}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        <CustomPagination
          count={userData && Math.ceil(userData.length / itemsPerPage)}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
        />
      </div>
    </div>
  );
};

export default Details;
