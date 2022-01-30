import Page from "../lib/widget/page";

export default function Index() {
  return (<>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <Page page='https://web.whatsapp.com/' />
  </>);
}
