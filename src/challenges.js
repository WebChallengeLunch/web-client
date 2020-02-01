const id = `svelte-338kgr`
const settings = `ctl=1&embed=1&file=index.js&hideNavigation=0&view=both`

export const paymentWidgetChallenge = {
  url: `https://stackblitz.com/edit/lit-element-gp9emb?${settings}`,
  description: `Make a payment widget using the <strong>lion-web</strong> library!
    <img src="https://cloudpayments.eu/images/docs/widget-demo.png" />

    A pop-up to enter card information of the payer. The form should contain the submit button and the following fields
      - card number (IBAN),
      - cardholder name,
      - date,
      - cvv,
      - email,

    include validation of
      - non empty values,
      - valid date & email,
      - cvv as 3 digit number

    and can be submitted with all the form data.

    Feel free to use the official <a href="https://github.com/ing-bank/lion">lion documentation</a> and <a href="https://lion-web-components.netlify.com/?path=/story/intro-lion-web-components--page">storybook examples</a>
  `.replace(/\n/g, '<br>'),
  id: 'lit-element-gp9emb',
  settings,
}

export const defaultChallenge = {
  url: `https://stackblitz.com/edit/${id}?${settings}`,
  description: 'Make an application / a component with pages / scenarios the best you can!',
  id,
  img: 'https://raw.githubusercontent.com/andreasbm/masonry-layout/master/example.gif',
  settings
}