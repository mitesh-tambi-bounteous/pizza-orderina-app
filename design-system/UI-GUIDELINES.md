# UI Guidelines — Pizza Ordering App

## Navigation
Top bar only (logo, Menu, Order Status, Cart), no sidebar — the product is a short,
linear ordering flow (browse → customize → cart → checkout) and a persistent sidebar
would imply more depth than a small pizzeria's menu has. Main sections: **Menu**,
**Cart/Checkout**, **Order Status**, **Account**.

## Layout and density
Spacious, consumer-facing density (not a dense console) — customers are choosing food,
not scanning data, so generous spacing (`space-3`/`space-4`) builds the same
unhurried, quality feel as a good restaurant. Single-column on mobile, a two-column
menu grid from tablet width up, and a fixed-width cart summary panel on desktop; the
only breakpoint that matters is where the cart moves from a bottom sheet (narrow
screens) to a persistent side panel (wide screens).

## Component usage
- Use `.card` for anything the customer chooses or reviews as a discrete item: menu
  items, the cart summary, an order-status entry — cards read as "one thing you can
  act on."
- Use `.chip` for compact, glanceable metadata attached to a card: spice level,
  dietary tags, order status — chips keep secondary info out of the card's primary
  text.
- Use a plain list (not a table) for the cart's line items — a table implies
  column-wise comparison, which customers aren't doing with 2-5 pizzas.
- Reserve tables for the owner-facing order history/admin view only, where scanning
  many rows by column (date, total, status) is the actual task.
- Use `.btn-primary` for exactly one action per screen (Add to Order, Place Order) so
  the customer always knows the one next step; `.btn-secondary` for everything else
  (Customize, Cancel, Back).
- Use `.input`/`.field-label` for all checkout and account forms; pair with
  `.input-error`/`.error-text` for validation so errors read as part of the form, not
  a separate alert.

## Theme
Light theme only, no dark mode — food photography and pizza imagery read truest
against the warm, light `color-bg`, and a small business site doesn't need to
maintain two visual identities.

## Voice and tone
Warm and plainspoken, like a family-owned pizzeria's counter staff — short sentences,
no slang or forced humor, and always name the actual food ("Your Margherita is in the
oven") rather than generic status jargon ("Processing").
