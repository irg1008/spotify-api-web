import tw, { styled } from "twin.macro";
import { HiStar as StarIcon, HiEmojiSad as EmojiSadIcon } from "react-icons/hi";

const Home = tw.div`
  w-full
  h-full
  pb-40
  pt-20
  flex
  items-center
  justify-center
`;

const Tracks = tw.div`
  space-y-5
  flex
  flex-col
  items-center
  justify-center
  w-full
  h-full
`;

const Title = tw.h1`
  text-white
  font-extralight
  my-5
  w-full
  text-center
`;

const Navbar = tw.div`
  w-full
  fixed
  top-0
  flex
  justify-end
  items-center
  bg-accent-dark
  bg-opacity-70!
  px-14
  py-4
  backdrop-filter
  backdrop-blur-md
  shadow-md
  border-b-2
  left-0
  z-10
`;

const Button = tw.button`
  bg-accent-medium
`;

const Img = tw.div`
  rounded-full
  h-10
  w-10
  overflow-hidden
  border-2
  border-white
`;

const TooltipContent = tw.div`
  flex
  flex-col
  justify-center
  items-center
  gap-4
  text-accent-darker
`;

const Name = tw.p`
  text-white
`;

const Link = tw.a`
  hover:underline
  flex
  justify-around
  items-center
`;

const Avatar = tw.div`
  relative
`;

const Icon = tw`
  h-7
  w-7
  absolute
  -bottom-2
  -right-2
`;

const PremiumIcon = styled(StarIcon)(() => [
  Icon,
  tw`
    text-yellow-300
  `,
]);

const PoorIcon = styled(EmojiSadIcon)(() => [
  Icon,
  tw`
  text-blue-500
  `,
]);

const Styled = {
  Home,
  Title,
  Navbar,
  Button,
  Tracks,
  Img,
  Name,
  Avatar,
  PremiumIcon,
  PoorIcon,
  TooltipContent,
  Link,
};
export default Styled;
