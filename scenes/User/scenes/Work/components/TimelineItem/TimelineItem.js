import React from 'react';
import styled from 'styled-components';
import { IoMdBriefcase } from 'react-icons/io';
import { media } from '../../../../../../theme/theme';

const TimelineItemStyle = styled.div`
  display: flex;

  .icon-container {
    position: relative;

    .icon-bg {
      color: ${props => props.theme.white};
      width: 5rem;
      height: 5rem;
      background: #10ac84;
      border-radius: 50%;
      z-index: 99;
      display: flex;
      align-items: center;
      justify-content: center;
      ${props =>
        props.theme.themeAlign === 'left'
          ? 'margin-left: 24.6rem'
          : 'margin-right: 24.6rem'};
      position: relative;
    }
  }

  .timeline-content {
    padding: 0 3.4rem;
  }

  .date {
    display: inline-block;
    position: absolute;
    ${props => props.theme.themeAlign}: 8rem;
    top: 1rem;
    color: #576574;
  }

  /* width < 670 */
  ${media.extraSmall`      
      .date {
        position: relative;
          ${props => props.theme.themeAlign}: auto;
          margin-bottom: 1rem;
      }
      .icon-container {
        .icon-bg {      
          margin-${props => props.theme.themeAlign}: 4.6rem;      
        }
      }
  `}
`;

const TimelineItem = () => (
  <TimelineItemStyle>
    <div className="icon-container">
      <div className="icon-bg">
        <IoMdBriefcase />
      </div>
    </div>

    <div className="timeline-content">
      <span className="date">May 2016 – Present</span>
      <h3>Saman information structure co</h3>
      <h4>Full stack web developer</h4>
      <p>
        In my role at Saman information structure co I am working as a full
        stack web engineer. I spend my time working on creating innovative, easy
        to use, and great looking applications using our enterprise portal built
        with PHP. In addition, I have spent time working on implementing
        responsive templates and collaborating with customers to determine needs
        and work through design options.
      </p>
    </div>
  </TimelineItemStyle>
);

export default TimelineItem;
