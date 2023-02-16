import { describe, it, expect, beforeEach } from "vitest";

import { mount } from "@vue/test-utils";
import PageTitle from "../PageTitle.vue";

describe("PageTitle", () => {
	let wrapper;
	let testProps = { text: "My Title" };

	beforeEach(() => {
		// Arrange
		wrapper = mount(PageTitle, {
			propsData: testProps,
		});
	});

	it("matches snapshot", () => {
		// Assert
		expect(wrapper).toMatchSnapshot();
	});

	it("renders properly", () => {
		// Assert
		expect(wrapper.text()).toContain("My Title");
	});

	it("should render empty string when no text is passed", () => {
		// Arrange
		wrapper = mount(PageTitle, {
			propsData: {},
		});

		// Assert
		const pageTitleStr = wrapper.find('[data-test="page-title"]');
		expect(pageTitleStr.text()).toBe("");
	});
});