import React, { useState } from 'react';
import './App.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Grid from '@mui/material/Grid';

const App = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar sx={{ color: 'black' }}>
            <IconButton
              size="xl"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h4" component="div" onClick={() => { window.location.href = "/" }} sx={{ flexGrow: 1, color: "#2980B9", cursor: "pointer" }}>
              <b>WoHealth</b>
            </Typography>
            <Button color="primary" onClick={() => { window.location.href = "/" }}>
              Home
            </Button>
            <Button color="primary" onClick={() => { window.location.href = "/" }}>
              About
            </Button>
          </Toolbar>
        </AppBar>
      </Box> <br />

      <Card sx={{ minWidth: 275, boxShadow: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="#405C14" gutterBottom>
            <b>Menstrual Cycle</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            The <b>menstrual cycle</b> is the monthly series of changes the body goes through to prepare for <b>pregnancy</b>. Each month, one of the ovaries releases an egg. This is called <b>ovulation</b>. Hormonal changes at this time get the uterus ready for pregnancy. If the released egg isn't fertilized during ovulation, the lining of the uterus sheds through the vagina. This is a <b>menstrual period</b>.
          </Typography>
        </CardContent>
      </Card><br />

      <Card sx={{ minWidth: 275, boxShadow: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="#405C14" gutterBottom>
            <b>Tracking Procedure</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            To find out what's typical for you, start keeping a record of your menstrual cycle on a calendar. Begin by tracking your start date every month for several months in a row to identify the regularity of your periods.<br />
            <b>1.End date:</b> How long does your period typically last? Is it longer or shorter than usual? <br />
            <b>2.Flow:</b> Record the heaviness of your bleeding. Does it seem lighter or heavier than usual? How often do you need to change your tampon or pad? Have you passed any blood clots?<br />
            <b>3.Bleeding changes:</b>Are you bleeding in between periods?<br />
            <b>4.Pain:</b> Describe any pain you have with your period. Does the pain feel worse than usual? It is not unusual to have some cramping or pain with your periods.<br />
            <b>5.Other changes:</b> Have you noticed any changes in your mood or behavior? Did anything new happen around the time you noticed changes in your periods?<br />

          </Typography>
        </CardContent>
      </Card><br />

      <Card sx={{ minWidth: 275, boxShadow: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="#405C14" gutterBottom>
            <b>Different Cycle Prediction Techniques</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            The menstrual cycle is divided into four phases:<br /> <br />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> <b>1. Menstrual phase</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The menstrual phase is the first stage of the menstrual cycle. It's also when you get your period. This phase starts when an egg from the previous cycle isn't fertilized.
                  You may have period <b>symptoms</b> like these: cramps (try these home remedies), tender breasts, bloating, mood swings, irritability, headaches, tiredness, low back pain
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography> <b>2. Follicular phase</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The follicular phase starts on the first day of your period (so there is some overlap with the menstrual phase) and ends when you ovulate. It starts when the hypothalamus signals your pituitary gland to release follicle-stimulating hormone (FSH). This hormone stimulates your ovaries to produce around 5 to 20 small sacs called follicles. Each follicle contains an immature egg.

                  Only the healthiest egg will eventually mature. The rest of the follicles will be reabsorbed into your body. The average follicular phase lasts for about 16 days. It can range from 11 to 27 days, depending on your cycle.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography> <b>3. Ovulation Phase</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Ovulation is when your ovary releases a mature egg. The egg travels down the fallopian tube toward the uterus to be fertilized by sperm. Ovulation happens around day 14 if you have a 28-day cycle — right in the middle of your menstrual cycle. It lasts about 24 hours. After a day, the egg will die or dissolve if it isn't fertilized.
                  You can tell that you're ovulating by <b>symptoms</b> like these: a slight rise in basal body temperature and thicker discharge that has the texture of egg whites.<br />

                  <b>Woman 1: </b>Constant 28 day cycle length, ovulation day 16.<br />
                  <b>Woman 2: </b>Average 23 day cycle length, ovulation day 13.<br />
                  <b>Woman 3: </b>Average 28 day cycle length, ovulation day 17<br />
                  <b>Woman 4: </b>Average 33 day cycle length, ovulation day 20<br />
                  <b>Woman 5: </b>Irregular, average 31 day cycle length, ovulation day 14.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography> <b>4. Luteal Phase</b></Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  After the follicle releases its egg, it changes into the corpus luteum. If you do get pregnant, your body will produce human chorionic gonadotropin (hCG). This is the hormone pregnancy tests detect. If you don't get pregnant, the corpus luteum will shrink away and be resorbed, which causes the onset of your period.
                  During this phase, if you don't get pregnant, you may experience <b>symptoms of premenstrual syndrome (PMS)</b>. These include: bloating, breast swelling, pain, or tenderness, mood changes, headache, weight gain, changes in sexual desire, food cravings, trouble sleeping.
                  The luteal phase lasts for 11 to 17 days. The average lengthTrusted Source is 14 days.
                </Typography>
              </AccordionDetails>
            </Accordion>

          </Typography>
        </CardContent>
      </Card><br /><br />

      <Card sx={{ minWidth: 275, boxShadow: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="#405C14" gutterBottom>
            <b>What is Conception ?</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            Conception is the joining of a sperm and egg, also known as fertilization. In most cases, conception occurs in a woman's fallopian tube in the hours or days following sexual intercourse. However, in cases of assisted reproduction, particularly in vitro fertilization, conception can occur in a lab.
            Conception marks the first step toward pregnancy—the sperm and egg have joined together, creating what is known as a zygote. In the coming days, the single-cell zygote transforms into a multi-celled embryo. But in order to facilitate pregnancy, the embryo must successfully move from the fallopian tubes and implant in the uterus, where it will continue to develop into a fetus and eventually an infant. <br />
            <Button variant="outlined" onClick={handleClickOpen}>
              Learn More
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <b>Conception In Pregnancy </b><br />
                  Conception happens whenever a sperm and egg join together, making a single-cell embryo that is called a zygote.<br />

                  <b>Conception and IVF:</b><br />
                  In vitro fertilization (IVF) is a process to help people get pregnant when they're unable to conceive via intercourse.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Okay</Button>
              </DialogActions>
            </Dialog>
          </Typography>
        </CardContent>
      </Card><br />

      <Card sx={{ minWidth: 275, boxShadow: 10 }}>
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="#405C14" gutterBottom>
            <b>What is Pregnancy ?</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            Pregnancy begins after implantation and lasts about 40 weeks. Pregnancy occurs when a sperm fertilizes an egg after it’s released from the ovary during ovulation. The fertilized egg then travels down into the uterus, where implantation occurs. A successful implantation results in pregnancy.<br />
            <b>Pregnancy week by week:</b><br />
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <b>First trimester</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A baby grows rapidly during the first trimester (weeks 1 to 12).<br />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <b>Second trimester</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  During the second trimester of pregnancy (weeks 13 to 27), your healthcare provider will likely perform an anatomy scan ultrasound.<br />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>
                  <b>Third trimester</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  During the third trimester (weeks 28 to 40), your weight gain will accelerate, and you may feel more tired.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Typography>
        </CardContent>
      </Card><br />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ height: 300, boxShadow: 10, m: 2 }}>
              <CardContent>
                <Typography sx={{ fontSize: 30 }} color="#405C14" component="div" align='center' gutterBottom>
                  <b>Early Motherhood</b>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                  Early motherhood was associated with higher levels of mental health disorders, lower levels of educational achievement, higher levels of welfare dependence, lower levels of workforce participation, and lower income. Control for confounding factors reduced the associations between early motherhood and later mental health disorders to statistical non-significance.
                  The linkages between early motherhood and later mental health difficulties can largely be accounted for by childhood, family, and related circumstances that occurred prior to parenthood.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ height: 300, boxShadow: 10, m: 2 }}>
              <CardContent>
                <Typography sx={{ fontSize: 30 }} color="#405C14" component="div" align='center' gutterBottom>
                  <b>Menopause</b>
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.primary">
                  Menopause is the time that marks the end of your menstrual cycles. It's diagnosed after you've gone 12 months without a menstrual period. Menopause can happen in your 40s or 50s. Menopause is a natural biological process. But the physical symptoms, such as hot flashes, and emotional symptoms of menopause may disrupt your sleep, lower your energy or affect emotional health.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>

  );
};

export default App;