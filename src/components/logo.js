
import { jsx, Image } from 'theme-ui';
import { Link } from './link';

export default function Logo({ src, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15,
      }}
      {...rest}
    >
      <Image src={src} alt="linkscape logo" />
    </Link>
  );
}
