import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <div className="row navbar">
      <div className="col-12 d-flex justify-content-between">
        <div className="logo-container">
          <img src="" alt="logo" />
        </div>
        <div className="link-container">
          <ul className="nav d-flex justify-content-between align-content-center">
            <li className="nav-item px-4">
              <a className="btn btn-primary rounded-pill" href="">
                {t('navbar.hire')}
              </a>
            </li>
            <li className="nav-item">
              <a className="btn btn-dark rounded-pill" href="">
                {t('navbar.learn')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
