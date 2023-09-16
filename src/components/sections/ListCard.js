import Card from "../ui/Card";
const ListCard = () => {
  //TODO render items by
  const promotions = [
    {
      title: "HOTEL XCARET MÉXICO",
      logoPromo: "https://via.placeholder.com/300x160",
      Subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. ",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.",
      ],
      button: {
        href: "#",
        text: "¡RESERVA AHORA!",
      },
      imagePromo: "https://via.placeholder.com/660x660",
    },
    {
      title: "Hotel Xcaret Arte",
      logoPromo: "https://via.placeholder.com/300x160",
      Subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. ",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.",
      ],
      button: {
        href: "#",
        text: "¡RESERVA AHORA!",
      },
      imagePromo: "https://via.placeholder.com/660x660",
    },
    {
      title: "LA CASA DE LA PLAYA",
      logoPromo: "https://via.placeholder.com/300x160",
      Subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat. ",
      paragraphs: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat.",
      ],
      button: {
        href: "#",
        text: "¡RESERVA AHORA!",
      },
      imagePromo: "https://via.placeholder.com/660x660",
    },
  ];

  return (
    <>
      {promotions.map((item, i) => {
        return <Card item={item} key={i} />;
      })}
    </>
  );
};

export default ListCard;
