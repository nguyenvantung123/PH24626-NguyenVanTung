import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export const getAll = async(req,res)=>{
    try {
        const {data:users}=await axios.get(
            "http://localhost:3001/users"
        );
        if(users.length === 0){
            res.status(404).json({
                message:"Không có sản phẩm nào"
            });
        }
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

export const get = async(req,res)=>{
    try {
        const {data:user} =await axios.get(
            `http://localhost:3001/users/${req.params.id}`
        )
        if(!user){
            return res.status(404).json({
                message:"Not found",
            })
        }
        return res.status(200).json({
            message:"Product found",
            data:user,
        })
    } catch (error) {
        return res.status(500).json({
            message:"Lỗi server"
        })
    }
}
export const post = async (req, res) => {
    try {
      const { data: product } = await axios.post(
        "http://localhost:3001/users",
        req.body
      );
  
      if (!product) {
        return res.status(404).json({
          message: "Không thể tạo sản phẩm",
        });
      }
  
      return res.status(200).json({
        message: "Sản phẩm đã được tạo",
        data: product,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Lỗi máy chủ",
      });
    }
  };

  export const deleteuser = async (req, res) => {
    try{
       await axios.delete(`http://localhost:3001/users/${req.params.id}`);
       return res.status(200).json({
        message: "San pham duoc xoa thanh cong",
       });
    } catch(error) {
        return res.status(500).json({
            message: error,
        });
    }
  };

  export const update = async (req, res) => {
    try{
        const {data: user} = await axios.patch(
            `http://localhost:3001/users/${req.params.id}`,
            req.body
        );
        if(!user) {
            return res.status(404).json({
                message: "Khong tim thay san pham",
            });
        }
        return res.status(200).json({
            message: "San pham duoc cap nhat thanh cong",
            data:user,
        });
    }catch(error) {
        return res.status(500).json({
            message: error,
        });
    }
  };

  
  export const updateput = async (req, res) => {
    try {
      const { data: user } = await axios.put(
        `http://localhost:3001/users/${req.params.id}`,
        req.body
      );
      console.log(data);
      if (!user) {
        return res.status(404).json({
          message: "Không tìm thấy sản phẩm",
        });
      }
      return res.status(200).json({
        message: "Sản phẩm đã được cập nhật thành công",
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        message: error,
      });
    }
  };