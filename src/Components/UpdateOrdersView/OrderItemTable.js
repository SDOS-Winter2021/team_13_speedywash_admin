import React, { useState, useEffect } from 'react';
import "./styles.css"
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
// Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import DoneIcon from "@material-ui/icons/DoneAllTwoTone";
import RevertIcon from "@material-ui/icons/NotInterestedOutlined";
import { Button } from '@material-ui/core';

function OrderItemTable(props){
    console.log(props.selectedOrder);
    const createData = (Service, Category, Item, Count, Price) => ({
        id: Service.replace(" ", "_"),
        Service,
        Category,
        Item,
        Count,
        Price,
        isEditMode: false
      });
    function parseUserData(data){
      var toPass = [];
      const services = Object.keys(data);
      for(var i = 0;i<services.length;i++){
        const categories = Object.keys(data[services[i]]);
        for (var j = 0;j<categories.length;j++){
          const items = Object.keys(data[services[i]][categories[j]]);
          for(var k = 0;k<items.length;k++){
            const curr = data[services[i]][categories[j]][items[k]];
            toPass.push(createData(services[i],categories[j],items[k],curr.countitem, curr.price));
          }
        }
      }
      return toPass;
      
    }
    
    const [rows, setRows] = useState(
        parseUserData(props.selectedOrder.orderItems)

    );

    const useStyles = makeStyles(theme => ({
        root: {
          width: "100%",
          marginTop: theme.spacing(3),
          overflowX: "auto"
        },
        table: {
          minWidth: 650
        },
        selectTableCell: {
          width: 60
        },
        tableCell: {
          width: 130,
          height: 40
        },
        input: {
          width: 130,
          height: 40
        }
      }));

      const CustomTableCell = ({ row, name, onChange }) => {
        const classes = useStyles();
        const { isEditMode } = row;
        return (
          <TableCell align="left" className={classes.tableCell}>
            {isEditMode ? (
              <Input
                value={row[name]}
                name={name}
                onChange={e => onChange(e, row)}
                className={classes.input}
              />
            ) : (
              row[name]
            )}
          </TableCell>
        );
      };
    const [previous, setPrevious] = React.useState({});
    const classes = useStyles();
    const onToggleEditMode = id => {
        setRows(state => {
          return rows.map(row => {
            if (row.id === id) {
              return { ...row, isEditMode: !row.isEditMode };
            }
            return row;
          });
        });
      };
    const onChange = (e, row) => {
        if (!previous[row.id]) {
          setPrevious(state => ({ ...state, [row.id]: row }));
        }
        const value = e.target.value;
        const name = e.target.name;
        const { id } = row;
        const newRows = rows.map(row => {
          if (row.id === id) {
            return { ...row, [name]: value };
          }
          return row;
        });
        setRows(newRows);
      };
      const onRevert = id => {
        const newRows = rows.map(row => {
          if (row.id === id) {
            return previous[id] ? previous[id] : row;
          }
          return row;
        });
        setRows(newRows);
        setPrevious(state => {
          delete state[id];
          return state;
        });
        onToggleEditMode(id);
      };
      return (

        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="caption table">
            <TableHead>
              <TableRow>
                <TableCell align="left" />
                <TableCell align="left">Service</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Item</TableCell>
                <TableCell align="left">Count</TableCell>
                <TableCell align="left">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell className={classes.selectTableCell}>
                    {row.isEditMode ? (
                      <>
                        <IconButton
                          aria-label="done"
                          onClick={() => onToggleEditMode(row.id)}
                        >
                          <DoneIcon />
                        </IconButton>
                        <IconButton
                          aria-label="revert"
                          onClick={() => onRevert(row.id)}
                        >
                          <RevertIcon />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton
                        aria-label="delete"
                        onClick={() => onToggleEditMode(row.id)}
                      >
                        <EditIcon />
                      </IconButton>
                    )}
                  </TableCell>
                  <CustomTableCell {...{ row, name: "Service", onChange }} />
                  <CustomTableCell {...{ row, name: "Category", onChange }} />
                  <CustomTableCell {...{ row, name: "Item", onChange }} />
                  <CustomTableCell {...{ row, name: "Count", onChange }} />
                  <CustomTableCell {...{ row, name: "Price", onChange }} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div>

        </div>
        </Paper>
      );
            

}
export default OrderItemTable