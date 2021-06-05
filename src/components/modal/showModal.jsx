import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { defaultStyles } from 'react-modal';

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

const ShowModal = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>業務フロー</Typography>
          <Typography className={classes.secondaryHeading}>１日の業務の流れについて説明しています。</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            出勤したら、打刻をしましょう。アプリにログインして打刻します。
            打刻したら、昨日の清掃作業が完了しているか確認してください。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>接客マナー</Typography>
          <Typography className={classes.secondaryHeading}>
            お客様への対応の仕方についてです。
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            礼儀正しくしましょう。はっきりと聞き取りやすく喋りましょう。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>キッチン業務</Typography>
          <Typography className={classes.secondaryHeading}>
            キッチンのシフトに入る方が把握しておくべき内容です。
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            清掃を心がけましょう。注文が表示されたら、それぞれのメニューに応じて盛りつけをしてください。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>トラブル対応</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            お客様からクレームがあった場合、自分で判断できないことはすぐに報告をしましょう。
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default ShowModal;
