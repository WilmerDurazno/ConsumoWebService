package ec.edu.ups.p58.pm.p58pmdemows.dao;

import java.util.List;
 
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import ec.edu.ups.p58.pm.p58pmdemows.modelo.Contacto;

@Stateless
public class ContadoDAO {

	@PersistenceContext
	private EntityManager em;
	
	public void create(Contacto contacto) throws Exception {
		em.persist(contacto);
	}
	
	public Contacto read(int codigo) throws Exception{
		return em.find(Contacto.class, codigo);
	}
	
	public void update(Contacto contacto) throws Exception {
		em.merge(contacto);
	}
	
	public void delete(int codigo) throws Exception {
		em.remove(this.read(codigo));
	}
	
	public List<Contacto> getList() throws Exception{
		String sql = "SELECT c FROM Contacto c";
		
		Query q = em.createQuery(sql, Contacto.class);
		
		return (List<Contacto>) q.getResultList();
	}
}
