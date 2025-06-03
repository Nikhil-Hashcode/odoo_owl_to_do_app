import { Root } from "../../src/components/Root";
import { mount } from "@odoo/owl";
import { makeTestFixture, nextTick, click } from "../helpers";

let fixture;

beforeEach(() => {
  fixture = makeTestFixture();
});

afterEach(() => {
  fixture.remove();
});

describe("Root", () => {
  test("toggles text on click", async () => {
    await mount(Root, fixture);
    expect(fixture.innerHTML).toBe("<div>Hello Owl</div>");

    click(fixture, "div");
    await nextTick();
    expect(fixture.innerHTML).toBe("<div>Hello World</div>");
  });
});
