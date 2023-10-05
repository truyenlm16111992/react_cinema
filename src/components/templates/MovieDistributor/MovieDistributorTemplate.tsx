import { Card } from 'components/ui';
import { useSelector } from 'react-redux'
import { RootState } from 'store';
import styled from 'styled-components';


export const MovieDistributorTemplate = () => {
  const { movieDistributorList } = useSelector((state: RootState) => state.quanLyRap);
  return (
    <div className='flex flex-col space-y-4 max-h-[100%] overflow-y-auto'>
      {movieDistributorList.map((e) => (
        <CardS
          className='flex items-center'
          bordered={false}
          hoverable={true}>
          <img src={e.logo} alt="" className='h-[50px] w-[50px]' />
          <h6 className='ml-10 font-500 uppercase'>{e.tenHeThongRap}</h6>
        </CardS>
      ))}
    </div>
  )
}

const CardS = styled(Card)`
   border-radius: 0px !important;
   box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09) !important;
   transition: all !important;
   transition-duration: .5s !important;
  .ant-card-body{
    display: flex;
    align-items: center;
    
  }

  .ant-card-bordered{
    border-radius: 0px !important;
  }

  &:hover{
    background-color: var(--primary-bg-color);
    color: white;
  }
`