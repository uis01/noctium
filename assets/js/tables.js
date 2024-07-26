// function sortTable(columnIndex) {
//     const table = document.getElementById('basic-PC');
//     const rows = Array.from(table.querySelectorAll('tbody tr'));
//     const isAscending = table.dataset.sortOrder === 'asc';
//     const currentSortColumn = table.dataset.sortColumn;

//     // Reset sort indicators
//     document.querySelectorAll('.sort-indicator i').forEach(icon => {
//         icon.classList.remove('fa-sort-up', 'fa-sort-down');
//         icon.classList.add('fa-sort-down');
//     });

//     if (currentSortColumn == columnIndex) {
//         table.dataset.sortOrder = isAscending ? 'desc' : 'asc';
//     } else {
//         table.dataset.sortOrder = 'asc';
//     }

//     table.dataset.sortColumn = columnIndex;

//     rows.sort((rowA, rowB) => {
//         let cellA = rowA.children[columnIndex].innerText;
//         let cellB = rowB.children[columnIndex].innerText;

//         if (columnIndex === 3) { // Untuk kolom harga
//             cellA = parseFloat(cellA.replace('$', '').replace(' ', '').replace(',', ''));
//             cellB = parseFloat(cellB.replace('$', '').replace(' ', '').replace(',', ''));
//             return (cellA - cellB) * (table.dataset.sortOrder === 'asc' ? 1 : -1);
//         }

//         return cellA.localeCompare(cellB) * (table.dataset.sortOrder === 'asc' ? 1 : -1);
//     });

//     rows.forEach(row => table.querySelector('tbody').appendChild(row));

//     // Set the appropriate sort indicator
//     const indicator = document.querySelector('#indicator-' + columnIndex + ' i');
//     if (table.dataset.sortOrder === 'asc') {
//         indicator.classList.remove('fa-sort-down');
//         indicator.classList.add('fa-sort-up');
//     } else {
//         indicator.classList.remove('fa-sort-up');
//         indicator.classList.add('fa-sort-down');
//     }
// }

function toggleSelectAll() {
    const checkboxes = document.querySelectorAll('input[name="selectRow"]');
    checkboxes.forEach(checkbox => checkbox.checked = !checkbox.checked);
}
function toggleSelectAll() {
const selectAllCheckbox = document.getElementById('selectAll');
const checkboxes = document.querySelectorAll('input[name="selectRow"]');
checkboxes.forEach(cb => cb.checked = selectAllCheckbox.checked);
}

function changeDropdownText(element, buttonId) {
    var dropdownButton = document.getElementById(buttonId);
    dropdownButton.childNodes[0].textContent = element.textContent;
  }