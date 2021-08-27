import React, {useContext} from 'react';
import {SetManualContext} from "../../App";
import categoryRequest from "../../requests/categoryRequest";
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { defaultStyles } from 'react-modal';
import Button from '@material-ui/core/Button';
import "./modal.css";


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));


const ShowModal = (props: any) => {
  const setManuals = useContext(SetManualContext);

  // console.log(props.manual);
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel: any) => (event: any, isExpanded: any) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteManual = async () => {
    const id = {id: props.manual.id}
    try{
      const manuals = await categoryRequest("delete_manual", id);
      console.log(manuals);
      // @ts-expect-error ts-migrate(2531) FIXME: Object is possibly 'null'.
      await (setManuals as any)(manuals.data[1]);
      return props.handleClose()
    }catch(err){
      console.log(err);
    }
  };

  return (
    <div>
      <div className="delete-button" onClick={deleteManual}>
        <Button variant="contained" color="secondary">
          このマニュアルを削除する
        </Button>
      </div>
      <div className={classes.root}>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography className={classes.heading}>{props.manual.job}</Typography>
            <Typography className={classes.secondaryHeading}>{props.manual.heading}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {props.manual.text}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};
export default ShowModal;
