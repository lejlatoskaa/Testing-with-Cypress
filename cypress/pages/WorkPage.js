export class WorkPage {
    cardLog(text) {
        cy.get('.et_pb_portfolio_item').each(($card) => {
          const title = $card.find('.et_pb_module_header a').text();
          const tag = $card.find('.post-meta a').text();
          if (tag.includes(text)) {
            cy.log(`TITLE: ${title}\nTAG: ${tag}\n`);
          }
        });
      }
}

