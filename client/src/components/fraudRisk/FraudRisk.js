import React, { Component } from "react";
import { connect } from "react-redux";


  class FraudRisk extends Component {
      render(){
        function createFraudRisk(){
          function tqRisk() {
            if (user.tickets.length <= 1) {
              const ticketQuantityRisk = 10;
              return ticketQuantityRisk;
            } else {
              const ticketQuantityRisk = 0;
              return ticketQuantityRisk;
            }
          }
          function tcRisk() {
            if (ticket.comments.length > 3) {
              const commentRisk = 5;
              return commentRisk;
            } else {
              const commentRisk = 0;
              return commentRisk;
            }
          }
      
          function parRisk() {
            if (ticket.fraudrisk.risk < 5) {
              const paramRisk = 5;
              return paramRisk;
            } else if (ticket.fraudrisk.risk > 95) {
              const paramRisk = 95;
              return paramRisk;
            } else {
              const paramRisk = 0;
              return paramRisk;
            }
          }
          
          function priceRisk() {
            const ticketTotalPrice = event.tickets.reduce(
              (totalSoFar, currentTicket) => {
                return totalSoFar + currentTicket.price;
              },
              0
            );
      
            const ticketsAveragePrice = ticketTotalPrice / event.tickets.length;
            if (ticket.price < ticketsAveragePrice) {
              function calculatePercentage(price, avPrice) {
                const priceDiff = avPrice - price;
                const priceDiffPercentage = (priceDiff / 100) * avPrice;
                return priceDiffPercentage;
              }
              const priceRisk = calculatePercentage(
                ticket.price,
                ticketsAveragePrice
              );
              return priceRisk;
            } else if (ticket.price > ticketsAveragePrice) {
              function calculatePercentage(price, avPrice) {
                const priceAvDiff = price - avPrice;
                const priceAvDiffPercentage = (priceAvDiff / 100) * price;
                return priceAvDiffPercentage;
              }
              const priceRisk = calculatePercentage(
                ticket.price,
                ticketsAveragePrice
              );
              return priceRisk;
            } else {
              const priceRisk = 0;
              return priceRisk;
            }
          }
          const ticketQuantityRisk = tqRisk();
          const commentRisk = tcRisk();
          const paramRisk = parRisk();
          const priceTicketRisk = priceRisk();
          const fraudR = ticketQuantityRisk + commentRisk + paramRisk + priceTicketRisk;
          return fraudR
        
        }  
        const fraudRiskRendered = createFraudRisk() 
        return(
          <div>{fraudRiskRendered}</div>
        );
      }
    }
    const mapStateToProps = state => ({
      user: state.user,
      events:state.events,
      comments: state.comments,
      fraudrisk: state.fraudrisk,
      tickets: state.tickets
    });
    
    export default connect(
      mapStateToProps,
    )(FraudRisk);