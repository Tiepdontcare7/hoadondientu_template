import { useState } from 'react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='ant-layout grid grid-cols-7 bg-[#FBF4EC]'>
      <div className='ant-row-flex styles__DropdownMenuWrapper-sc-1opqjrn-0 lfhmMP ml-menu'>
        <div className='ant-row-flex ant-row-flex-center'>
          <div className='ant-col ml-menu-item'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div onClick={toggleMenu} className='flex gap-x-[10px] py-2 select-none cursor-pointer  styles__MenuWrapper-sc-1opqjrn-4 eItfNu ant-dropdown-trigger'>
              <img width={20} src="https://hoadondientu.gdt.gov.vn/static/images/ic_ql_tao_lap.svg" className='styles__IconImage-sc-1opqjrn-1 fsvLlA' alt="" />
              <span>
                Tra cứu
              </span>
              <i aria-label="icon: caret-down" className='anticon anticon-caret-down'>
                <svg viewBox="0 0 1024 1024" focusable="false" data-icon="caret-down" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path></svg>
              </i>
            </div>

            <ul className={`bg-white ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical ${isMenuOpen ? 'hidden' : ''}`}>
              <li role='menuitem' className=' hover:bg-slate-200 px-2 py-1 ant-dropdown-menu-item styles__MenuItem-sc-1opqjrn-2 eygjqL'>
                <a href="/tra-cuu/tra-cuu-hoa-don">Tra cứu hóa đơn</a>
              </li>

              <li role='menuitem' className='hover:bg-slate-200 px-2 py-1 ant-dropdown-menu-item styles__MenuItem-sc-1opqjrn-2 eygjqL'>
                <a href="">Tra cứu bảng tổng hợp</a>
              </li>

              <li role='menuitem' className='hover:bg-slate-200 px-2 py-1 ant-dropdown-menu-item styles__MenuItem-sc-1opqjrn-2 eygjqL'>
                <a href="">Thông báo từ CQT</a>
              </li>

              <li role='menuitem' className='hover:bg-slate-200 px-2 py-1 ant-dropdown-menu-item styles__MenuItem-sc-1opqjrn-2 eygjqL'>
                <a href="">Tra cứu đề nghị phát sinh</a>
              </li>
            </ul>
          </div>

          {/* <Dropdown
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
                </Dropdown> */}
        </div>
      </div>
    </div>
  );
}


export default HomePage;