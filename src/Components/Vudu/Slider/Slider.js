import React from "react";
import { Grid, Button, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "image 1",
        imgPath: 'https://images2.vudu.com/uiEntry/46344/placard-1500.png',
    },
    {
        label: "image 2",
        imgPath: "https://images2.vudu.com/uiEntry/46574/ribbon.jpg",
    },
    {
        label: "image 3",
        imgPath: "https://images2.vudu.com/uiEntry/46576/placard-1500.jpg",
    },
    {
        label: "image 4",
        imgPath: "https://images2.vudu.com/uiEntry/46514/placard-1500.png",
    },
    {
        label: "image 5",
        imgPath: "https://images2.vudu.com/uiEntry/46577/ribbon.jpg",
    },
    {
        label: "image 6",
        imgPath: "https://images2.vudu.com/uiEntry/46517/placard-1500.png",
    },
    {
        label: "image 7",
        imgPath: "https://images2.vudu.com/uiEntry/46578/placard-1500.png",
    },
    {
        label: "image 8",
        imgPath: "https://images2.vudu.com/uiEntry/46518/placard-1500.png",
    },
];

const Slider = () => {

    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const theme = useTheme();
  
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const style = {
        box: {
          display: "flex",
          flexDirection: "column",
          color: "white",
        },
    };

    return (
        <Grid sx={style.box}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                        component="img"
                        src={step.imgPath}
                        alt={step.label}
                        sx={{
                            height: 400,
                            display: "block",
                            overflow: "hidden",
                            width: "100%",
                        }}
                    />
                    ) : null}
                </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                sx={{background: 'transparent'}}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />
        </Grid>
    );
};

export default Slider;
