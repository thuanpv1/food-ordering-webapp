/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  authorMessage: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Made with love by {author}.
    `,
  },
  danhSach: {
    id: `${scope}.danhSach`,
    defaultMessage: 'Danh sách',
  },
  goiMon: {
    id: `${scope}.goiMon`,
    defaultMessage: 'Gọi món',
  },
  thanhToan: {
    id: `${scope}.thanhToan`,
    defaultMessage: 'Thanh toán',
  },
});
