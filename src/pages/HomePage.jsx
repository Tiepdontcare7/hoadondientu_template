import { CaretDownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

const items = [
  {
    label: <a href="/check-bill">Tra cứu hóa đơn</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">Tra cứu bảng tổng hợp</a>,
    key: '1',
  },
  {
    label: <a href="https://www.aliyun.com">Thông báo từ CQT</a>,
    key: '2',
  },
  {
    label: <a href="https://www.aliyun.com">Tra cứu đề nghị phát sinh</a>,
    key: '3',
  },
  {
    label: <a href="https://www.aliyun.com">Tra cứu dữ liệu Etax</a>,
    key: '4',
  },
  {
    label: <a href="https://www.aliyun.com">Tra cứu dữ liệu Etax chi tiết</a>,
    key: '5',
  },
];

const HomePage = () => (
  <div className='grid grid-cols-7 bg-[#FBF4EC]'>
    <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
      className='cursor-pointer ml-10'
    >
      <a onClick={(e) => e.preventDefault()}>
        <Space className='my-4'>
          <img src='/ic_ql_tao_lap.svg' className='w-5' />
          <span className='font-semibold text-base'>Tra cứu</span>
          <CaretDownOutlined />
        </Space>
      </a>
    </Dropdown>
  </div>
);
export default HomePage;