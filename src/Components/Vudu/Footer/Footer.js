import React from "react";
import { Grid, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import { useTranslation } from "react-i18next";

import FooterComponent from "./FooterComponent";
import appStore from '../../../images/appStore.png'
import playstore from '../../../images/playstore.png'
import microsoft from '../../../images/microsoft.png'
import FooterComponent2 from "./FooterComponent2";

const Footer = () => {

    const { t } = useTranslation();

    const style = {
        bottomLink: {
            marginLeft: '40px', 
            marginRight: '40px',
            display: 'flex', 
            justifyContent: 'space-between' 
        }
    }

  return (
    <Grid container sx={{bgcolor: 'background.default', color: 'text.primary'}}>
        <Grid container sx={{margin: '40px'}}>
            <Grid item xs={6} md={1.9}>
                <img style={{hover: {opacity: 1}}} width='130px' height='45px' src={appStore} alt='appStore' />
            </Grid>

            <Grid item xs={6} md={1.9}>
                <img width='130px' height='45px' src={playstore} alt='playStore' />
            </Grid>

            <Grid item xs={6} md={1.9}>
                <img width='130px' height='45px' src={microsoft} alt='microsoft' />
            </Grid>
        </Grid>
        <Grid item xs={6} md={2}>
            <FooterComponent
                heading={t('Watch')}
                n1={t('Spotlight')}
                n2={t('Movies')}
                n3={t('Tv')}
                n4={t('Free')}
            />
        </Grid>
        <Grid item xs={6} md={2}>
            <FooterComponent
                heading={t('My Account')}
                n1={t('My Vudu')}
                n2={t('Account')}
                n3={t('Settings')}
                n4={t('Manage Devices')}
            />
        </Grid>
        <Grid item xs={6} md={2}>
            <FooterComponent
                heading={t('Features')}
                n1={t('Lists')}
                n2={t('Family')}
                n3={t('Disc to Digital')}
                n4={t('Movies Anywhere')}
                n5={t('Gift Cards')}
            />
        </Grid>
        <Grid item xs={6} md={6}>
            <FooterComponent
                heading={t('Help')}
                n1={t('About Us')}
                n2={t('Devices')}
                n3={t('Customer Support')}
                n4={t('Forums')}
                n5={t('Contact Us')}
                n6={t('Advertise')}
                n7={t('Accessibility')}
                n8={t('Jobs')}
            />
        </Grid>

        <Grid container sx={{justifyContent: 'flex-end', marginRight: '40px'}}>
            <Avatar sx={{margin: '5px'}} alt="LinkedIn" src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEUBfrT///8AeLEAfLPm8fcAc64sj70AerL5+/xkpsqSwdqGuNSSv9kAdrCx0uPS5vDw+Puwy9/h8PanzOC41uadxdw2lMFyrc5DmcMRh7rI4Ox5stEQgrZaocdlp8sni7u/2uihyd9JnMVfhI/qAAADyUlEQVR4nO2c21biMBRAaVIIXgKVW6mIiP//kVOcGRVoTnEmSVey9n7wqWK2zTm5nTAaAQAAAAAAAAAAAAAAAAAAAAAAAAAAwG1obU4M3YxQGGvN5q6u621jrRq6Nf4xartcFH+YPu9erB66SX6x+3lxRvU4yqm3ajMrrii3+XRV0yyuBVvqXBT1qOoULIrXPBS1mjsEi+KQRbpRj07BYj4eunUe0Iep27CoM0io6l4QLOYZRKLuzqN/2SQfifogCha75LupeZUN3+zQLfxfpEyaRyDaJ9lwkXwc9humrqjWPb00+Uyjdj2GyWcavZENl8lnGvfC4jd3yffSkepY/H5RvQzdvv/HbCXDY/KdtMW+uQWnGbzCNhIbdyS+ph+FJ8zeJbjMYQF8Qjlm3zOT+nzmE7Xv6qgP42wEW8WXq3Qz3yQ/mzlD282y/NKrVu82jyTzDa30ZPe0annabUYqow76hdZK2RMq+RUTAACkxcfAk+voo9vRtZ3aNk0z0mOr8pnGf6CNtZvd8bksy6qq2p9v63piB6rvaGcybi6eNcKj+uwjX1fXx5LVaq8GkNRa2mybnDVIrYRHP/cDtGrWrs+cLg/RHbUuHa3pMJT25f7uOxq9lk6Vi9kksqNvQ7WVPu+DddyVmV9DbR/6/FrKScxNyp8Y2mOfoZKe+EYdcQPhR+9Qqmo4GRopFZ1xjLeN59FQj59vFWyDMZqiR0MrHoFcEu3AwJ/h+JYk842HSIreDPfiEU8X2ziDhr932DsOXlLFGfm9Gcq1VZ3MoowZ3gz/hfcYb3FQwyj1SIMaFvsIL3FYwxjFLMMaXvyBHA0j1OsMbFiFP+UKZSiu878RPtcEMFws6+3ksNnWsxumOeEn4N4N5+9KGaNPN/2UurxO1fHvCJ5NPRtO67P6BtO7qzENfmvFr2F5Vd9gndU6fwgeiF4Ny+Z6QWR7KljvQweiT8PpoWvFZ+XNm+C3AXwa7jtfh3zvKHydtUfDleNtyPs35ShwIPozrBpHU3sqrUNXePozPDoDaiyu/0NPvv0ZulsqX3kIvSHlzbB050T9LhmGLpb3ZihsK2ktGYa+xenN8FEYua0UiA+pGEpb2Eo60EjGUAon8XgcwzQMpXucGGKIIYYYYoghhhhiiCGGGGKIIYYYYoghhhhiOIDhMnvDW27nYYghhhhiiCGGGGKIIYYYYoghhhkbioWpwQ0XUzcX394yK5xPFndCyb15FH4x+LdHaDt2c9HqHzx6jhF+MYevDAcAAAAAAAAAAAAAAAAAAAAAAAAAAAjHL2WbTclqSirPAAAAAElFTkSuQmCC' />
            <Avatar sx={{margin: '5px'}} alt="Facebook" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1_8CW9D07Q9s0xtoxphVyRhTEL52SI6Zg6A&usqp=CAU' />
            <Avatar sx={{margin: '5px'}} alt="Twitter" src='data:image/png;base64,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' />
            <Avatar sx={{margin: '5px'}} alt="youtube" src='data:image/png;base64,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' />
        </Grid>

        <Grid container sx={style.bottomLink}>
            <Grid container item md={8}>
                <FooterComponent2 name={t('Terms and Policies')} />
                <FooterComponent2 name={t('Your Privacy Rights - Privacy Policy')} />
                <FooterComponent2 name={t('AdChoices')} />
                <FooterComponent2 name={t('Do Not Sell My Personal Information')} />
                <FooterComponent2 name={t('California Notice')} />
            </Grid>

            <Grid>
                <Typography 
                    variant="subtitle2" 
                    gutterBottom
                    // sx={{color: "white"}}
                > © 2022 {t('Fandango')} </Typography>
            </Grid>
        </Grid>
    </Grid>
  );
};

export default Footer;
