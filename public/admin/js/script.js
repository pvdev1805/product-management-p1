// Button
const listButtonStatus = document.querySelectorAll(`[button-status]`);

if (listButtonStatus.length > 0) {
  let url = new URL(window.location.href);

  listButtonStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");

      if (status) {
        url.searchParams.set("status", status);
      } else {
        url.searchParams.delete("status");
      }

      window.location.href = url.href;
    });
  });
}
// End - Button

// Form Search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
  let url = new URL(window.location.href);

  formSearch.addEventListener("submit", (event) => {
    event.preventDefault();

    const keyword = event.target.elements.keyword.value;

    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }

    window.location.href = url.href;
  });
}
// End - Form Search

// Button Pagination
const listButtonPagination = document.querySelectorAll("[button-pagination]");
if (listButtonPagination.length > 0) {
  let url = new URL(window.location.href);

  listButtonPagination.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");

      if (page) {
        url.searchParams.set("page", page);
      } else {
        url.searchParams.delete("page");
      }

      window.location.href = url.href;
    });
  });
}
// End - Button Pagination

// button-change-status
const listButtonChangeStatus = document.querySelectorAll(
  "[button-change-status]"
);
if (listButtonChangeStatus.length > 0) {
  const formChangeStatus = document.querySelector("[form-change-status]");

  listButtonChangeStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      const status = button.getAttribute("data-status");
      const path = formChangeStatus.getAttribute("data-path");

      const action = `${path}/${status}/${id}?_method=PATCH`;

      formChangeStatus.action = action;

      formChangeStatus.submit();
    });
  });
}
// End - button-change-status

// checkbox-multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  const inputCheckAll = checkboxMulti.querySelector(`input[name="checkall"]`);
  const listInputId = checkboxMulti.querySelectorAll(`input[name="id"]`);

  inputCheckAll.addEventListener("click", () => {
    if (inputCheckAll.checked) {
      listInputId.forEach((input) => {
        input.checked = true;
      });
    } else {
      listInputId.forEach((input) => {
        input.checked = false;
      });
    }
  });

  listInputId.forEach((input) => {
    input.addEventListener("click", () => {
      const countInputIdChecked = checkboxMulti.querySelectorAll(
        `input[name="id"]:checked`
      ).length;

      const lengthInputId = listInputId.length;

      if (countInputIdChecked == lengthInputId) {
        inputCheckAll.checked = true;
      } else {
        inputCheckAll.checked = false;
      }
    });
  });
}
// End - checkbox-multi

// form-change-multi
const formChangeMulti = document.querySelector(`form[form-change-multi]`);
if (formChangeMulti) {
  formChangeMulti.addEventListener("submit", (event) => {
    event.preventDefault();

    const type = formChangeMulti.querySelector(`select[name="type"]`).value;

    const listInputIdChecked = document.querySelectorAll(
      `input[name="id"]:checked`
    );

    if (listInputIdChecked.length > 0) {
      const ids = [];

      listInputIdChecked.forEach((input) => {
        const id = input.value;
        ids.push(id);
      });

      const stringIds = ids.join(", ");

      const input = formChangeMulti.querySelector(`input[name="ids"]`);
      input.value = stringIds;

      if (type == "delete-all") {
        const isConfirm = confirm(
          "Are you sure you want to delete these products?"
        );
        if (!isConfirm) {
          return;
        }
      }

      formChangeMulti.submit();
    } else {
      alert("Please select at least 1 product!");
    }
  });
}
// End - form-change-multi

// button-delete
const listButtonDelete = document.querySelectorAll(`button[button-delete]`);
if (listButtonDelete.length > 0) {
  const formDeleteItem = document.querySelector(`form[form-delete-item]`);

  listButtonDelete.forEach((button) => {
    button.addEventListener("click", () => {
      const isConfirm = confirm(
        "Are you sure you want to delete this product?"
      );

      if (isConfirm) {
        const id = button.getAttribute("data-id");
        const path = formDeleteItem.getAttribute("data-path");

        const action = `${path}/${id}?_method=DELETE`;

        formDeleteItem.action = action;

        formDeleteItem.submit();
      }
    });
  });
}
// End - button-delete
