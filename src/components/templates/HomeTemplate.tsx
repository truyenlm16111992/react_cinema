import { Card, Footer, Header, Skeleton } from "components"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootState, useAppDispatch } from "store"
import { getMovieListThunk } from "store/quanLyPhim"

export const HomeTemplate = () => {
  const dispatch = useAppDispatch()
  const { movieList, isFetchingMovieList } = useSelector((state: RootState) => state.quanLyPhim)
  console.log(movieList);
  console.log(isFetchingMovieList);
  useEffect(() => {
    dispatch(getMovieListThunk())
  }, [dispatch])

  if (isFetchingMovieList) {
    return (
      <div  className="grid grid-cols-4">
        {[...Array(12)].map(() => {
          return <Card  className="!w-[350px] mt-20">
            <Skeleton.Image className="!w-full !h-[250px] !block"/>
            <Skeleton.Input className="!w-full mt-16 !block"/>
            <Skeleton.Input className="!w-full mt-16"/>
          </Card>
        })}
      </div>
    )
  }

  return (
    <div>
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
    </div>
  )
}
