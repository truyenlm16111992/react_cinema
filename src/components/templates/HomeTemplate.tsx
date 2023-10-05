import { BannerTemplate, Card, Skeleton } from "components"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { getMovieListThunk } from "store/quanLyPhim"
import { MovieDistributorTemplate } from "./MovieDistributor"
import { MovieCinemaTemplate } from "./MovieCinema"
import { MovieTemplate } from "./Movie"
import { getMovieDistributorThunk } from "store/quanLyRap"
import styled from "styled-components"
export const HomeTemplate = () => {
  const dispatch = useAppDispatch()
  const { movieList, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)
  useEffect(() => {
    dispatch(getMovieListThunk());
    dispatch(getMovieDistributorThunk());
  }, [dispatch])
  return (
    <div>
      <BannerTemplate />
      {isFetchingMovieList ? (
        <div className="grid grid-cols-4">
          {[...Array(12)].map((_, i) => {
            return (
              <Card className="!w-[350px] !mt-20" key={i}>
                <Skeleton.Image className="!w-full !h-[250px] !block" />
                <Skeleton.Input className="!w-full mt-16 !block" />
                <Skeleton.Input className="!w-full mt-16" />
              </Card>
            )
          })}
        </div>
      ) : (
        <div className="grid grid-cols-4">
          {movieList?.map((movie) => (
            <Card
              key={movie.maPhim}
              className='!mt-20'
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={movie.hinhAnh} />}
            >
              <Card.Meta
                title={movie.tenPhim}
                description={movie.moTa.substring(0, 30)}
              />
            </Card>
          ))}
        </div>
      )}
      <ContainerS className="flex mt-20 h-[400px]">
        <MovieDistributorTemplate />
        <MovieCinemaTemplate />
        <MovieTemplate />
      </ContainerS>
    </div>
  );
}
const ContainerS = styled.div`
  ::-webkit-scrollbar {
      width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
      background: #555;
  }
`